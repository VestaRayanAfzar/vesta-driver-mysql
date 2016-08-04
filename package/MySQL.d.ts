import { IDatabaseConfig, Database, IQueryOption, IModelCollection } from "vesta-schema/Database";
import { IDeleteResult, IUpsertResult, IQueryResult } from "vesta-schema/ICRUDResult";
import { Condition, Vql } from "vesta-schema/Vql";
export declare class MySQL extends Database {
    private pool;
    private connection;
    private schemaList;
    private config;
    private models;
    private primaryKeys;
    connect(): Promise<Database>;
    constructor(config: IDatabaseConfig, models: IModelCollection);
    private pk(modelName);
    init(): Promise<boolean>;
    findById<T>(model: string, id: number | string, option?: IQueryOption): Promise<IQueryResult<T>>;
    findByModelValues<T>(model: string, modelValues: T, option?: IQueryOption): Promise<IQueryResult<T>>;
    findByQuery<T>(query: Vql): Promise<IQueryResult<T>>;
    insertOne<T>(model: string, value: T): Promise<IUpsertResult<T>>;
    insertAll<T>(model: string, value: Array<T>): Promise<IUpsertResult<T>>;
    addRelation<T, M>(model: T, relation: string, value: number | Array<number> | M | Array<M>): Promise<IUpsertResult<M>>;
    removeRelation<T>(model: T, relation: string, condition?: Condition | number | Array<number>): Promise<any>;
    private updateRelations(model, relation, relatedValues);
    updateOne<T>(model: string, value: T): Promise<IUpsertResult<T>>;
    updateAll<T>(model: string, newValues: T, condition: Condition): Promise<IUpsertResult<T>>;
    deleteOne(model: string, id: number | string): Promise<IDeleteResult>;
    deleteAll<T>(model: string, condition: Condition): Promise<IDeleteResult>;
    private getAnalysedValue<T>(model, value);
    private getQueryParams(query, alias?);
    private getCondition(model, condition);
    private getManyToManyRelation(list, query);
    private normalizeList(schema, list);
    private parseJson(str);
    private createTable(schema);
    private relationTable(field, table);
    private camelCase(str);
    private pascalCase(str);
    private qoute(str);
    private createDefinition(fields, table, checkMultiLingual?);
    private columnDefinition(filed);
    private getType(properties);
    private initializeDatabase();
    private getOperatorSymbol(operator);
    private addOneToManyRelation<T, M>(model, relation, value);
    private addManyToManyRelation<T, M>(model, relation, value);
    private removeOneToManyRelation<T>(model, relation);
    private removeManyToManyRelation<T>(model, relation, condition);
    escape(value: any): any;
    query<T>(query: string): Promise<T>;
}
