# == Schema Information
#
# Table name: songs
#
#  id          :integer          not null, primary key
#  album       :string
#  artist      :string
#  cover_image :string
#  duration    :time
#  name        :string
#  position    :integer
#  url         :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Song < ApplicationRecord
  # serialize :song
  # /\A(?!00:00)[0-5][0-9]:[0-5][0-9]\Z/
end
