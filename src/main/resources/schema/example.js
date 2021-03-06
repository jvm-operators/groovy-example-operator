{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "A Spark cluster configuration",
  "type": "object",
  "javaInterfaces": ["io.radanalytics.operator.common.EntityInfo"],
  "properties": {
    "name": {
      "type": "string"
    },
    "color": {
      "type": "string",
      "default": "red"
    },
    "memory": {
      "type": "string"
    },
    "cpu": {
      "type": "string"
    },
    "env": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "value": { "type": "string" }
        },
        "required": ["name", "value"]
      }
    }
  },
  "required": [ ]
}