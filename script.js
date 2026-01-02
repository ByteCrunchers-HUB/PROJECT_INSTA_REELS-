const reels = [
  {
    username: "priya_codes",
    likeCount: 1240,
    isLiked: true,
    commentCount: 132,
    caption: "Late night coding hits different 💻✨",
    video: "https://www.pexels.com/video/mother-helping-her-son-with-homework-5184438/",
    userProfile: "https://randomuser.me/api/portraits/men/21.jpg",
    shareCount: 54,
    isFollowed: true
  },
  {
    username: "travel_with_raj",
    likeCount: 9820,
    isLiked: false,
    commentCount: 421,
    caption: "Mountains > everything 🏔️❤️",
    video: "https://www.pexels.com/download/video/3626154/",
    userProfile: "https://randomuser.me/api/portraits/men/21.jpg",
    shareCount: 310,
    isFollowed: false
  },
  {
    username: "fit_life_anu",
    likeCount: 4560,
    isLiked: true,
    commentCount: 289,
    caption: "Consistency is the real flex 💪",
    video: "https://www.pexels.com/download/video/3627091/",
    userProfile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 178,
    isFollowed: true
  },
  {
    username: "foodie_diaries",
    likeCount: 11230,
    isLiked: false,
    commentCount: 640,
    caption: "Street food cravings 😋🔥",
    video: "https://www.pexels.com/video/a-man-attending-a-business-meeting-with-a-group-of-people-3256848/",
    userProfile: "https://randomuser.me/api/portraits/men/34.jpg",
    shareCount: 520,
    isFollowed: false
  },
  {
    username: "tech_with_sam",
    likeCount: 3890,
    isLiked: true,
    commentCount: 201,
    caption: "JavaScript mistakes every beginner makes ⚠️",
    video: "https://www.pexels.com/download/video/8720756/",
    userProfile: "https://randomuser.me/api/portraits/men/56.jpg",
    shareCount: 94,
    isFollowed: true
  },
  {
    username: "daily_motivation",
    likeCount: 8740,
    isLiked: true,
    commentCount: 512,
    caption: "Don’t stop until you’re proud ✨",
    video: "https://www.pexels.com/download/video/3831853/",
    userProfile: "https://randomuser.me/api/portraits/women/67.jpg",
    shareCount: 430,
    isFollowed: false
  },
  {
    username: "art_by_kiran",
    likeCount: 2760,
    isLiked: false,
    commentCount: 143,
    caption: "From blank page to masterpiece 🎨",
    video: "https://www.pexels.com/download/video/3831853/",
    userProfile: "https://randomuser.me/api/portraits/men/72.jpg",
    shareCount: 88,
    isFollowed: true
  },
  {
    username: "campus_life",
    likeCount: 6540,
    isLiked: true,
    commentCount: 367,
    caption: "College memories are forever 🎓❤️",
    video: "https://www.pexels.com/download/video/3831853/",
    userProfile: "https://randomuser.me/api/portraits/women/81.jpg",
    shareCount: 245,
    isFollowed: true
  },
  {
    username: "nature_lens",
    likeCount: 9980,
    isLiked: false,
    commentCount: 589,
    caption: "Peace begins where nature speaks 🌿",
    video: "https://www.pexels.com/download/video/5896379/",
    userProfile: "https://randomuser.me/api/portraits/men/88.jpg",
    shareCount: 610,
    isFollowed: false
  },
  {
    username: "night_vibes",
    likeCount: 3420,
    isLiked: true,
    commentCount: 198,
    caption: "City lights & calm nights 🌃",
    video: "https://www.pexels.com/download/video/3226454/",
    userProfile: "https://randomuser.me/api/portraits/women/95.jpg",
    shareCount: 121,
    isFollowed: true
  }
];
var sum=""
reels.forEach((elem)=>{
    sum+=`<div class="reel">
                    <video autoplay muted loop playsinline class="main-video">
                        <source src="${elem.video}" type="video/mp4">
                        </video>
                    <div class="bottom">
                    <div class="user">
                        <img src="${elem.userProfile}" alt="">
                        <h4>${elem.username}</h4>
                        <button>${elem.isFollowed?"following":"follow"}</button>
                    </div >
                    <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon"><i class="${elem.isLiked ? 'ri-heart-fill' : 'ri-heart-line'}"
   style="color:${elem.isLiked ? 'red' : 'white'}"></i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                         <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                           
                        </div>
                    </div>
                </div>`
})
var allreels=document.querySelector(".all-reels");
allreels.innerHTML=sum
