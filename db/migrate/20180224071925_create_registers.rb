class CreateRegisters < ActiveRecord::Migration[5.1]
  def change
    create_table :registers do |t|
      t.string :category_name
      t.string :item_name
      t.timestamps
    end
  end
end
