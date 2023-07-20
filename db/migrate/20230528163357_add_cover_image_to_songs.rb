class AddCoverImageToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :cover_image, :string
  end
end
