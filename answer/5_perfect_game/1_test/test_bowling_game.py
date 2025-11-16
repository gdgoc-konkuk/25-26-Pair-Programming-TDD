import unittest
from bowling_game import Game


class TestBowlingGame(unittest.TestCase):
    """볼링 게임 테스트 클래스"""

    def setUp(self):
        """각 테스트 전에 실행되는 설정"""
        self.game = Game()

    def test_sample_always_passes(self):
        """샘플 테스트 - 항상 통과합니다"""
        # Given: 새로운 게임이 시작되었을 때 (setUp에서 Game 인스턴스 생성됨)

        # When: 아무 동작도 하지 않고

        # Then: 초기 점수는 0이어야 합니다
        self.assertEqual(self.game.score(), 0)

    def test_gutter_game(self):
        """모든 공이 거터로 빠진 경우 - 0점"""
        # Given & When: 20번 모두 0핀
        for _ in range(20):
            self.game.roll(0)
        
        # Then: 총 점수는 0점
        self.assertEqual(self.game.score(), 0)

    def test_all_ones(self):
        """모든 투구에서 1핀씩 쓰러뜨린 경우 - 20점"""
        # Given & When: 20번 모두 1핀
        for _ in range(20):
            self.game.roll(1)
        
        # Then: 총 점수는 20점
        self.assertEqual(self.game.score(), 20)

    def test_one_spare(self):
        """스페어 하나 + 보너스 3핀"""
        # Given & When: 스페어(5+5) + 다음 투구(3) + 나머지 0
        self.game.roll(5)
        self.game.roll(5)
        self.game.roll(3)
        
        for _ in range(17):
            self.game.roll(0)
        
        # Then: 총 점수는 16점
        self.assertEqual(self.game.score(), 5+5+3+3)


    def test_one_strike(self):
        """스트라이크 하나 + 보너스"""
        # Given & When: 스트라이크(10) + 다음 투구(3) + 다음 투구(4) + 나머지 0
        self.game.roll(10)
        self.game.roll(3)
        self.game.roll(4)
        
        for _ in range(16):
            self.game.roll(0)
        
        # Then: 총 점수는 10+3+4+3+4점
        self.assertEqual(self.game.score(), 10+3+4+3+4)


    def test_perfect_game(self):
        """완벽한 게임 - 모든 투구가 스트라이크"""
        # Given & When: 12번의 스트라이크 (10프레임 + 10프레임 보너스 2투구)
        for _ in range(12):
            self.game.roll(10)
        
        # Then: 300점
        self.assertEqual(self.game.score(), 300)


if __name__ == '__main__':
    unittest.main()
