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
require "test_helper"

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
