// src/components/LoginForm/index.tsx

export default function LoginForm() {
  return (
    <form>
      {/* label속성 htmlfor와 input속성 id는 연결되어 있음 */}
      <label htmlFor="email">이메일:</label>
      <input
        id="email"
        type="email"
        placeholder="이메일을 입력하세요"
        data-testid="email-input"
      />
      <button type="submit">로그인</button>
    </form>
  );
}
