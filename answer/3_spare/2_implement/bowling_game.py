class Game:
    """볼링 게임 클래스"""

    def __init__(self):
        """
        새로운 게임을 초기화합니다.
        """
        self.rolls = []

    def roll(self, pins: int) -> None:
        """
        플레이어가 공을 굴려 쓰러뜨린 핀의 개수를 기록합니다.

        Args:
            pins: 쓰러뜨린 핀의 수 (0-10)
        """
        self.rolls.append(pins)

    def score(self) -> int:
        """
        현재까지의 총 점수를 계산하여 반환합니다.

        Returns:
            총 점수
        """
        total = 0
        roll_index = 0

        # 10개 프레임을 하나씩 처리
        for frame in range(10):
            # 스페어인가? (두 투구 합이 10)
            if self.rolls[roll_index] + self.rolls[roll_index + 1] == 10:
                # 스페어: 10점 + 다음 투구
                total += 10 + self.rolls[roll_index + 2]  # 보너스
                roll_index += 2
            else:
                # 일반: 두 투구 합
                total += self.rolls[roll_index] + self.rolls[roll_index + 1]
                roll_index += 2

        return total
