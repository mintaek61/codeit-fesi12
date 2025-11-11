export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* h-6: 높이 24px */}
      {/* w-6: 너비 24px */}
      {/* rounded-full: 둥글게 */}
      {/* bg-linear-to-tr: 그라데이션 효과 - top, right 방향으로 그라데이션 효과 */}
      {/* from-[#096cde]: 시작 색상 */}
      {/* from-30%: 그라데이션 시작점의 위치 */}
      {/* to-[#ddf1ff]: 끝 색상 */}
      <span className="h-6 w-6 rounded-full bg-linear-to-tr from-[#096cde] from-30% to-[#ddf1ff]" />
    </div>
  );
}
