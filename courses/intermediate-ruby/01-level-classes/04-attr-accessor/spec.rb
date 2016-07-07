describe "Playlist" do
  describe "instance variables" do
    it "is able to create a country playlist" do
      playlist = Playlist.new

      # Setters
      playlist.name = "Country"
      playlist.author = "Blake Shelton"
      playlist.song_list = ["Sure Be Cool If You Did", "God Gave Me You"]

      # Getters
      expect( playlist.name ).to eq("Country")
      expect( playlist.author ).to eq("Blake Shelton")
      expect( playlist.song_list ).to eq(["Sure Be Cool If You Did", "God Gave Me You"])
    end
    it "is able to create a Rock playlist" do
      playlist = Playlist.new

      # Setters
      playlist.name = "Rock"
      playlist.author = "R&R"
      playlist.song_list = ["Radioactive", "Clouds"]

      # Getters
      expect( playlist.name ).to eq("Rock")
      expect( playlist.author ).to eq("R&R")
      expect( playlist.song_list ).to eq(["Radioactive", "Clouds"])
    end
  end
end
