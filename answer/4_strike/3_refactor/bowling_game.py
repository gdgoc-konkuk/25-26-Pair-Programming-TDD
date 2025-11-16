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
        total = 0
        roll_index = 0
        
        for frame in range(10):
            if self._is_strike(roll_index):
                total += 10 + self._strike_bonus(roll_index)
                roll_index += 1
            elif self._is_spare(roll_index):
                total += 10 + self._spare_bonus(roll_index)
                roll_index += 2
            else:
                total += self._frame_score(roll_index)
                roll_index += 2
        
        return total

    def _is_strike(self, roll_index: int) -> bool:
        """스트라이크 판정: 첫 투구가 10핀"""
        return self.rolls[roll_index] == 10

    def _strike_bonus(self, roll_index: int) -> int:
        """스트라이크 보너스: 다음 2투구"""
        return self.rolls[roll_index + 1] + self.rolls[roll_index + 2]

    def _is_spare(self, roll_index: int) -> bool:
        """스페어 판정을 별도 메서드로 추출"""
        return self.rolls[roll_index] + self.rolls[roll_index + 1] == 10

    def _spare_bonus(self, roll_index: int) -> int:
        """스페어 보너스 계산을 별도 메서드로 추출"""
        return self.rolls[roll_index + 2]

    def _frame_score(self, roll_index: int) -> int:
        """일반 프레임 점수 계산을 별도 메서드로 추출"""
        return self.rolls[roll_index] + self.rolls[roll_index + 1]