package bowling;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * 볼링 게임 테스트 클래스
 */
class GameTest {
    private Game game;

    /**
     * 각 테스트 전에 실행되는 설정
     */
    @BeforeEach
    void setUp() {
        game = new Game();
    }

    /**
     * 샘플 테스트 - 항상 통과합니다
     */
    @Test
    void testSampleAlwaysPasses() {
        // Given: 새로운 게임이 시작되었을 때 (setUp에서 Game 인스턴스 생성됨)

        // When: 아무 동작도 하지 않고

        // Then: 초기 점수는 0이어야 합니다
        assertEquals(0, game.score());
    }

    /**
     * 모든 공이 거터로 빠진 경우 - 0점
     */
    @Test
    void testGutterGame() {
        // Given & When: 20번 모두 0핀
        for (int i = 0; i < 20; i++) {
            game.roll(0);
        }

        // Then: 총 점수는 0점
        assertEquals(0, game.score());
    }

    /**
     * 모든 투구에서 1핀씩 쓰러뜨린 경우 - 20점
     */
    @Test
    void testAllOnes() {
        // Given & When: 20번 모두 1핀
        for (int i = 0; i < 20; i++) {
            game.roll(1);
        }

        // Then: 총 점수는 20점
        assertEquals(20, game.score());
    }

    /**
     * 스페어 하나 + 보너스 3핀
     */
    @Test
    void testOneSpare() {
        // Given & When: 스페어(5+5) + 다음 투구(3) + 나머지 0
        game.roll(5);
        game.roll(5);
        game.roll(3);

        for (int i = 0; i < 17; i++) {
            game.roll(0);
        }

        // Then: 총 점수는 16점
        assertEquals(5 + 5 + 3 + 3, game.score());
    }
}
