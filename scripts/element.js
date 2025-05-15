const videoGrid = document.querySelector(".video-grid");

export const videoBody = (data) => {
  console.log(data);
  data.map((item) => {
    videoGrid.appendChild(videoElement(item));
  });
};

const videoElement = (items) => {
  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video-preview");

  const thumbnailDiv = document.createElement("div");
  thumbnailDiv.classList.add("thumbnail-row");

  const thumbnail = document.createElement("img");
  thumbnail.classList.add("thumbnail");
  thumbnail.src = items.snippet.thumbnails.medium.url;

  const thumbnailTimeDiv = document.createElement("div");
  thumbnailTimeDiv.classList.add("video-time");

  const videoInfoContainer = document.createElement("div");
  videoInfoContainer.classList.add("video-info-grid");

  const channelDiv = document.createElement("div");
  channelDiv.classList.add("channel-picture");

  const profileImg = document.createElement("img");
  profileImg.classList.add("profile-picture");

  const videoInfoDiv = document.createElement("div");
  videoInfoDiv.classList.add("video-info");

  const videoTitleP = document.createElement("p");
  videoTitleP.classList.add("video-title");
  let title = items.snippet.title.length >= 35 ? items.snippet.title.slice(0, 34) + "..." : items.snippet.title;
  videoTitleP.innerText = title;

  const videoAuthorP = document.createElement("p");
  videoAuthorP.classList.add("video-author");
  videoAuthorP.innerText = items.snippet.channelTitle;

  const videoStatsP = document.createElement("p");
  videoStatsP.classList.add("video-stats");

  videoInfoDiv.append(videoTitleP, videoAuthorP, videoStatsP);
  channelDiv.append(profileImg);

  videoInfoContainer.append(channelDiv, videoInfoDiv);

  thumbnailDiv.append(thumbnail, thumbnailTimeDiv);

  videoContainer.append(thumbnailDiv, videoInfoContainer);

  return videoContainer;
};
