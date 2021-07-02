class CreateUids < ActiveRecord::Migration[6.1]
  def change
    create_table :uids do |t|
      t.integer :item_id
      t.integer :uid_params

      t.timestamps
    end
  end
end
