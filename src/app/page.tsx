export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* bg-linear-to-r: 그라데이션 효과 - 왼쪽에서 오른쪽으로 */}
      {/* from-[#15c064]: 시작 색상 */}
      {/* from-20%: 그라데이션이 시작되는 위치 */}
      {/* to-[#00d1ff]: 끝 색상 */}
      {/* to-90%: 그라데이션 멈춤 위치 */}
      {/* bg-clip-text: 텍스트에 그라데이션 효과 적용 */}
      {/* px-1: 텍스트 좌우 여백 1px */}
      {/* leading-[1.1]: 텍스트 높이 1.1배 */}
      {/* font-bold: 텍스트 굵게 */}
      {/* text-transparent: 텍스트 투명 -> 배경색이 보이게 */}
      <span className="bg-linear-to-r from-[#15c064] from-20% to-[#00d1ff] to-90% bg-clip-text px-1 text-9xl leading-[1.1] font-bold text-transparent">
        Codify
      </span>
    </div>
  );
}
