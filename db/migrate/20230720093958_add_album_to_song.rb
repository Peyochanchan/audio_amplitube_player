class AddAlbumToSong < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :album, :string
  end
end
