class SongsController < ApplicationController
  before_action :set_song, only: %i[show edit update destroy]

  def index
    @songs = Song.all
    songs_ids = @songs.map(&:id)
    respond_to do |format|
      format.html
      format.json { render json: @songs }
    end
  end

  def show
    render json: @song
  end

  def new
    @song = Song.new
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      respond_to do |format|
      format.html
      format.js { render json: @song }
    end
      redirect_to songs_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    @song.update(song_params)
    if @song.save
      redirect_to songs_path
    else
      render :edit
    end
  end

  def destroy
    @song.destroy
    redirect_to root_path
  end

  private

  def song_params
    params.require(:song).permit(:name, :artist, :album, :url, :cover_image, :duration, :position)
  end

  def set_song
    @song = Song.find(params[:id])
  end
end
