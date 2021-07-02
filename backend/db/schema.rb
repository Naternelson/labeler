# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_02_195630) do

  create_table "assemblies", force: :cascade do |t|
    t.integer "batch_id"
    t.integer "composition_id"
    t.integer "parent_batch_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "batches", force: :cascade do |t|
    t.datetime "mfg"
    t.datetime "exp"
    t.integer "product_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "compositions", force: :cascade do |t|
    t.integer "child_product_id"
    t.integer "parent_product_id"
    t.integer "qty"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "status"
    t.string "location"
    t.integer "batch_id"
    t.integer "represents"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "product_groups", force: :cascade do |t|
    t.string "name"
    t.float "weight"
    t.string "color"
    t.float "length"
    t.float "width"
    t.float "height"
    t.string "material"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "product_group_id"
    t.float "sales_price"
    t.float "purchase_price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "uid_params", force: :cascade do |t|
    t.string "name"
    t.string "regex"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "uids", force: :cascade do |t|
    t.integer "item_id"
    t.integer "uid_param_id"
    t.string "item_value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
