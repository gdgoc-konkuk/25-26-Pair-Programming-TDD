package bowling;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * 볼링 게임 테스트 클래스
 */
class GameTest {

    private Game game;

    @BeforeEach
    void setUp() {
        game = new Game();
    }

    @Test
    void 샘플_테스트_항상_통과합니다() {
        // Given: 새로운 게임이 시작되었을 때
        Game newGame = new Game();

        // When: 아무 동작도 하지 않고

        // Then: 초기 점수는 0이어야 합니다
        assertEquals(0, newGame.score());
    }
}
