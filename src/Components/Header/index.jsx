import "./style.css";

function Header() {
  const headerTitle = "고양이 사진 랜덤 생성기 🐾";

  return (
    <div id='headerContainer'>
      <div id='headerTitle'>{headerTitle}</div>
    </div>
  );
}

export default Header;
