// 저녁 메뉴 및 이모지 데이터 목록
const menuList = [
  { name: "삼겹살", emoji: "🥓" },
  { name: "치킨", emoji: "🍗" },
  { name: "피자", emoji: "🍕" },
  { name: "초밥", emoji: "🍣" },
  { name: "떡볶이", emoji: "🥘" },
  { name: "짜장면", emoji: "🍜" },
  { name: "햄버거", emoji: "🍔" },
  { name: "돈가스", emoji: "🥩" },
  { name: "파스타", emoji: "🍝" },
  { name: "김치찌개", emoji: "🍲" },
  { name: "족발", emoji: "🍖" },
  { name: "카레", emoji: "🍛" },
  { name: "쌀국수", emoji: "🍜" },
  { name: "샐러드", emoji: "🥗" },
  { name: "타코", emoji: "🌮" }
];

const emojiElement = document.getElementById("food-emoji");
const nameElement = document.getElementById("food-name");
const button = document.getElementById("recommend-btn");

button.addEventListener("click", () => {
  // 애니메이션 초기화
  emojiElement.classList.remove("bounce");
  
  setTimeout(() => {
    // 랜덤 인덱스 추출
    const randomIndex = Math.floor(Math.random() * menuList.length);
    const selectedFood = menuList[randomIndex];

    // 화면 업데이트
    emojiElement.textContent = selectedFood.emoji;
    nameElement.textContent = selectedFood.name;
    
    // 바운스 애니메이션 적용
    emojiElement.classList.add("bounce");
  }, 10);
});
