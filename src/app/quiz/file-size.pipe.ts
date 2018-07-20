import { Pipe, PipeTransform } from '@angular/core';

/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
*/
@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  private units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  transform(bytes = 0, precision = 2): string {
    let sizeInBytes = bytes;
    let unit = 0;
    const unitSize = 1024;

    if (isNaN(parseFloat(String(sizeInBytes))) || !isFinite(sizeInBytes)) {
      return '?';
    }

    while (sizeInBytes >= unitSize) {
      sizeInBytes /= unitSize;
      unit++;
    }

    return `${sizeInBytes.toFixed(+precision)} ${this.units[unit]}`;
  }
}
