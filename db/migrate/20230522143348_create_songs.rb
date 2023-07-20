class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :url
      t.string :name
      t.time :duration
      t.integer :position

      t.timestamps
    end
  end
end
