// type.ts

export type TPlaylistItem = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

  
  export type TPlaylistPageProps = {
    onSelectPlaylist: (id: string) => void;
  };
  
  export type TVideoItem = {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
      resourceId: {
        videoId: string;
      };
    };
  };
  
  export type TVideosPageProps = {
    playlistId: string;
  };
  