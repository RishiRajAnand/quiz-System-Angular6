import { Injectable } from '@angular/core';
import { IdbService } from './idb.service';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';

export class BaseService {

    dbname = 'quizplatform';

    constructor() {
        // turn on jsstore log status - help you to debug
        // turn it off in production or when you dont need
        // this.connection.setLogStatus(true);
        this.initJsStore();
    }

    /**
     * DB Connection
     */
    get connection() {
        return IdbService.idbCon;
    }

    /**
     *  Create the database when it does not exist,
     *  otherwise open the db connection for the specified database name.
     */
    initJsStore() {
        this.connection.isDbExist(this.dbname).then(isExist => {
            if (isExist) {
                this.connection.openDb(this.dbname);
            } else {
                const dataBase = this.getDatabase();
                this.connection.createDb(dataBase);
            }
        }).catch(err => {
            // this will be fired when indexedDB is not supported.
            alert(err.message);
        });
    }

    /**
     * Defining table and adding columns to it with proper datatype
     */     
    private getDatabase() {

        // Sample table
        const tblStudent: ITable = {
            name: 'Students',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'name',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'gender',
                    dataType: DATA_TYPE.String,
                    default: 'male'
                },
                {
                    name: 'country',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'city',
                    dataType: DATA_TYPE.String,
                    notNull: true
                }
            ]
        };

        //cmn_asset_type table
        const tblCmnAssetType: ITable = {
            name: 'cmn_asset_type',
            columns: [
                {
                    name: 'asset_type_id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'asset_type_name',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };

        //cmn_asset table
        const tblCmnAsset: ITable = {
            name: 'cmn_asset',
            columns: [
                {
                    name: 'asset_id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'asset_type_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'asset_name',
                    dataType: DATA_TYPE.String,
                    notNull: true
                },
                {
                    name: 'file_name',
                    dataType: DATA_TYPE.String,
                    notNull: true
                },
                {
                    name: 'alt_title',
                    dataType: DATA_TYPE.String,
                    notNull: true
                },
                {
                    name: 'mime_type',
                    dataType: DATA_TYPE.String,
                    notNull: true
                }
            ]
        };
             
       //qti_item table 
        const tblQtiItem: ITable = {
            name: 'qti_item',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_type_id',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'qti_identifier',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'version',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'label',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'prompt_text',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'time_dependent',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'max_time_limit',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'adaptive',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'score',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'difficulty',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'tool_name',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'tool_version',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'is_child',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                }
            ]
        };

        //qti_item_assets
        const tblQtiItemAssets: ITable = {
            name: 'qti_item_assets',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'asset_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_pk_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'assets_position',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'asset_identifier',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };
        
        //qti_item_type
        const tblQtiItemType: ITable = {
            name: 'qti_item_type',
            columns: [
                {
                    name: 'item_type_id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_type_name',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'item_type_description',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'label_text',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'short_form',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'item_type_display_order',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'is_deleted',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                }
            ]
        };

        //qti_test
        const tblQtiTest: ITable = {
            name: 'qti_test',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'test_id',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'test_identifier',
                    notNull: false,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'version',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'title',
                    notNull: false,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'label',
                    notNull: false,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'test_mode',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'no_of_questions',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'general_test',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'enable_feedback',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'navigation_type',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'timer_selected',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'time_limit',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_time_limit',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'override_time_limit',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'choose_question',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'randomize_item',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'randomize_answer',
                    notNull: false,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'test_feedback',
                    notNull: false,
                    dataType: DATA_TYPE.String
                }
            ]
        };
       						
        //qti_item_choice_interaction table
        const tblQtiItemChoiceInteraction: ITable = {
            name: 'qti_item_choice_interaction',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_pk_id', 
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'shuffle',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'min_choice',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'max_choice',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_score',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'is_partial_score',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'is_negative_score',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                }
            ]
        };
        
        //qti_item_graphic_interaction table
        const tblQtiItemGraphicInteraction: ITable = {
            name: 'qti_item_graphic_interaction',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_pk_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'resource_identifier',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'label',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'place_holder_text',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'shape_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'coords',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };

        //qti_item_latest_version table
        const tblQtiItemLatestVersion: ITable = {
            name: 'qti_item_latest_version',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'version',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                }
            ]
        };

        //qti_item_model_feedback table
        const tblQtiItemModelFeedback: ITable = {
            name: 'qti_item_model_feedback',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_pk_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'outcome_type_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'feedback_text',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };

        //qti_item_relation table
        const tblQtiItemRelation: ITable = {
            name: 'qti_item_relation',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_pk_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'relation_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'sequence',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                }
            ]
        };        			

        //qti_item_remediation_links table
        const tblQtiItemRemediationLinks: ITable = {
            name: 'qti_item_remediation_links',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_pk_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'remediation_link_type_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'link_text1',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'link_text2',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'link_text3',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };

        //qti_item_simple_choice table
        const tblQtiItemSimpleChoice: ITable = {
            name: 'qti_item_simple_choice',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_pk_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'resource_identifier',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'label',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'value',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'fixed',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'correct',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'rationale',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };

        //qti_item_simple_choice_assets table
        const tblQtiItemSimpleChoiceAssets: ITable = {
            name: 'qti_item_simple_choice_assets',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_simple_choice_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'asset_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                }
            ]
        };

        //qti_item_text_interaction table
        const tblQtiItemTextInteraction: ITable = {
            name: 'qti_item_text_interaction',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_pk_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'qti_resource_identifier',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'label',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'correct',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'string_identifier',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'expected_length',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'pattern_mask',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'place_holder_text',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };				

        //qti_remediation_link_type table
        const tblQtiRemediationLinkType: ITable = {
            name: 'qti_remediation_link_type',
            columns: [
                {
                    name: 'remediation_link_type_id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'remediation_link_type_name',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };        

        //qti_status table
        const tblQtiStatus: ITable = {
            name: 'qti_status',
            columns: [
                {
                    name: 'status_id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'status_name',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'description',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };

        //qti_test_latest_version table
        const tblQtiTestLatestVersion: ITable = {
            name: 'qti_test_latest_version',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'test_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'version',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                }
            ]
        };

        //qti_user_test table
        const tblQtiUserTest: ITable = {
            name: 'qti_user_test',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'test_pk_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'total_time_spent',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'bookmark',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'total_questions',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'total_correct',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'total_incorrect',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'total_unattempted',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'grade',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'test_start',
                    notNull: true,
                    dataType: DATA_TYPE.DateTime
                },
                {
                    name: 'test_last_attempted',
                    notNull: true,
                    dataType: DATA_TYPE.DateTime
                },
                {
                    name: 'test_completed_date',
                    notNull: true,
                    dataType: DATA_TYPE.DateTime
                }
            ]
        };        								

        //qti_user_test_items table
        const tblQtiUserTestItems: ITable = {
            name: 'qti_user_test_items',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'item_pk_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'user_test_id',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'version',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'sequence',
                    notNull: true,
                    dataType: DATA_TYPE.Number
                }
            ]
        };
    	
        //qti_user_test_item_progress table
        const tblQtiUserTestItemProgress: ITable = {
            name: 'qti_user_test_item_progress',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'user_test_item_id', 
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'attempt_count', 
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'score', 
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'correct', 
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'time_spent', 
                    notNull: true,
                    dataType: DATA_TYPE.Number
                }
            ]
        };
        					
        //qti_user_test_item_responses table
        const tblQtiUserTestItemResponses: ITable = {
            name: 'qti_user_test_item_responses',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'user_test_item_progress_id', 
                    notNull: true,
                    dataType: DATA_TYPE.Number
                },
                {
                    name: 'value',
                    notNull: true,
                    dataType: DATA_TYPE.String
                }
            ]
        };


        /**
         * Creating tables in the given Database
         */
        const dataBase: IDataBase = {
            name: this.dbname,
            tables: [
                        tblStudent ,
                        tblCmnAssetType,
                        tblCmnAsset,
                        tblQtiItem,
                        tblQtiItemAssets,
                        tblQtiItemType,
                        tblQtiTest,
                        tblQtiItemChoiceInteraction,
                        tblQtiItemGraphicInteraction,
                        tblQtiItemLatestVersion,
                        tblQtiItemModelFeedback,
                        tblQtiItemRelation,
                        tblQtiItemRemediationLinks,
                        tblQtiItemSimpleChoice,
                        tblQtiItemSimpleChoiceAssets,
                        tblQtiItemTextInteraction,
                        tblQtiRemediationLinkType,
                        tblQtiStatus,
                        tblQtiTestLatestVersion,
                        tblQtiUserTest,
                        tblQtiUserTestItems,
                        tblQtiUserTestItemProgress,
                        tblQtiUserTestItemResponses

                    ]
        };
        return dataBase;
    }
}