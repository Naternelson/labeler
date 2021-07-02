class CreateUidParams < ActiveRecord::Migration[6.1]
  def change
    create_table :uid_params do |t|
      t.string :name
      t.string :regex

      t.timestamps
    end
  end
end
