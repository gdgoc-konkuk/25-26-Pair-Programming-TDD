class Game:
    """볼링 게임 클래스"""

    def __init__(self):
        """
        새로운 게임을 초기화합니다.
        """
        self.total_score = 0

    def roll(self, pins: int) -> None:
        """
        플레이어가 공을 굴려 쓰러뜨린 핀의 개수를 기록합니다.

        Args:
            pins: 쓰러뜨린 핀의 수 (0-10)
        """
        self.total_score += pins

    def score(self) -> int:
        """
        현재까지의 총 점수를 계산하여 반환합니다.

        Returns:
            총 점수
        """
        return self.total_score
