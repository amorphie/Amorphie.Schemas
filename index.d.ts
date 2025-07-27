export interface SchemaDefinitions {
  schemas: {
    coreSchema: object;
    workflowDefinition: object;
    taskDefinition: object;
    viewDefinition: object;
    functionDefinition: object;
    extensionDefinition: object;
    schemaDefinition: object;
  };
  
  // Individual schema exports
  coreSchema: object;
  workflowDefinition: object;
  taskDefinition: object;
  viewDefinition: object;
  functionDefinition: object;
  extensionDefinition: object;
  schemaDefinition: object;
  
  // Helper functions
  getSchema(type: 'core' | 'workflow' | 'task' | 'view' | 'function' | 'extension' | 'schema'): object | null;
  getAvailableTypes(): string[];
}

declare const schemas: SchemaDefinitions;
export = schemas; 