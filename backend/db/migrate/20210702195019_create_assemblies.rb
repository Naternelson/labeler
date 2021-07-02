class CreateAssemblies < ActiveRecord::Migration[6.1]
  def change
    create_table :assemblies do |t|
      t.integer :batch_id
      t.integer :composition_id
      t.integer :parent_batch_id

      t.timestamps
    end
  end
end
