import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { Game } from './bowlingGame.js';

/**
 * 볼링 게임 테스트
 */
describe('볼링 게임 테스트', () => {
    let game;

    /**
     * 각 테스트 전에 실행되는 설정
     */
    beforeEach(() => {
        game = new Game();
    });

    /**
     * 샘플 테스트 - 항상 통과합니다
     */
    it('샘플 테스트 - 항상 통과합니다', () => {
        // Given: 새로운 게임이 시작되었을 때 (beforeEach에서 Game 인스턴스 생성됨)

        // When: 아무 동작도 하지 않고

        // Then: 초기 점수는 0이어야 합니다
        assert.strictEqual(game.score(), 0);
    });

    /**
     * 모든 공이 거터로 빠진 경우 - 0점
     */
    it('모든 공이 거터로 빠진 경우 - 0점', () => {
        // Given & When: 20번 모두 0핀
        for (let i = 0; i < 20; i++) {
            game.roll(0);
        }

        // Then: 총 점수는 0점
        assert.strictEqual(game.score(), 0);
    });
});
