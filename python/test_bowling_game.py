import unittest
from bowling_game import Game


class TestBowlingGame(unittest.TestCase):
    """볼링 게임 테스트 클래스"""

    def setUp(self):
        """각 테스트 전에 실행되는 설정"""
        self.game = Game()

    def test_sample_always_passes(self):
        """샘플 테스트 - 항상 통과합니다"""
        # Given: 새로운 게임이 시작되었을 때
        game = Game()

        # When: 아무 동작도 하지 않고

        # Then: 초기 점수는 0이어야 합니다
        self.assertEqual(game.score(), 0)


if __name__ == '__main__':
    unittest.main()
