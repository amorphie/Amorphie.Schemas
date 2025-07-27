# @amorphie/schema-definitions

JSON Schema definitions for Amorphie vNext Workflow components validation.

## Overview

This package provides comprehensive JSON Schema definitions used by the Amorphie ecosystem to validate workflows and components developed with the vNext Workflow product. These schemas ensure consistency and validity of workflow definitions, tasks, views, functions, and other components within the Amorphie platform.

## Included Schemas

- **Core Schema**: Base schema definition for all Amorphie components
- **Workflow Definition**: Schema for workflow component definitions (`sys-flows`)
- **Task Definition**: Schema for task component definitions (`sys-tasks`)
- **View Definition**: Schema for view component definitions
- **Function Definition**: Schema for function component definitions
- **Extension Definition**: Schema for extension component definitions
- **Schema Definition**: Meta-schema for schema definitions

## Installation

```bash
npm install @amorphie/schema-definitions
```

## Usage

This package is primarily designed to be used with the [@amorphie/cli](https://www.npmjs.com/package/@amorphie/cli) tool for workflow development and validation.

### Using with @amorphie/cli

The recommended way to use these schemas is through the official Amorphie CLI:

```bash
npm install -g @amorphie/cli
```

The CLI automatically uses these schema definitions for:
- Validating workflow definitions
- Checking component structure
- Ensuring compliance with Amorphie standards
- Development-time validation

For detailed CLI usage and workflow development guide, please refer to the [@amorphie/cli documentation](https://www.npmjs.com/package/@amorphie/cli).

### Programmatic Usage

If you need to access the schemas programmatically:

```javascript
const schemas = require('@amorphie/schema-definitions');

// Get specific schema
const workflowSchema = schemas.workflowDefinition;
const taskSchema = schemas.taskDefinition;

// Get schema by type
const coreSchema = schemas.getSchema('core');

// Get all available schema types
const availableTypes = schemas.getAvailableTypes();
```

## Schema Structure

All schemas follow the Amorphie component structure with required fields:
- `key`: Component identifier
- `version`: Semantic version (Major.Minor.Patch)
- `domain`: Domain identifier
- `flow`: Flow identifier
- `flowVersion`: Flow version
- `tags`: Component tags
- `attributes`: Component-specific attributes

## Contributing

This package is maintained by the Amorphie Team. For issues, feature requests, or contributions, please visit the [GitHub repository](https://github.com/burganbank/Amorhie.Schemas).

## License

MIT

## Support

For support and questions:
- GitHub Issues: [https://github.com/burganbank/Amorhie.Schemas/issues](https://github.com/burganbank/Amorhie.Schemas/issues)
- Documentation: Available through [@amorphie/cli](https://www.npmjs.com/package/@amorphie/cli)

---

**Note**: This package is part of the Amorphie ecosystem and is primarily intended for use with the official Amorphie CLI tools and vNext Workflow platform. 