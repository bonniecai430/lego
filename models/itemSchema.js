const Schema = require("mongoose").Schema;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    theme: { type: Schema.Types.ObjectId, ref: "Theme" },
    price: { type: Number, require: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
