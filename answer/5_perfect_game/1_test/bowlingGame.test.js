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

    /**
     * 모든 투구에서 1핀씩 쓰러뜨린 경우 - 20점
     */
    it('모든 투구에서 1핀씩 쓰러뜨린 경우 - 20점', () => {
        // Given & When: 20번 모두 1핀
        for (let i = 0; i < 20; i++) {
            game.roll(1);
        }

        // Then: 총 점수는 20점
        assert.strictEqual(game.score(), 20);
    });

    /**
     * 스페어 하나 + 보너스 3핀
     */
    it('스페어 하나 + 보너스 3핀', () => {
        // Given & When: 스페어(5+5) + 다음 투구(3) + 나머지 0
        game.roll(5);
        game.roll(5);
        game.roll(3);

        for (let i = 0; i < 17; i++) {
            game.roll(0);
        }

        // Then: 총 점수는 16점
        assert.strictEqual(game.score(), 5 + 5 + 3 + 3);
    });

    /**
     * 스트라이크 하나 + 보너스
     */
    it('스트라이크 하나 + 보너스', () => {
        // Given & When: 스트라이크(10) + 다음 투구(3) + 다음 투구(4) + 나머지 0
        game.roll(10);
        game.roll(3);
        game.roll(4);

        for (let i = 0; i < 16; i++) {
            game.roll(0);
        }

        // Then: 총 점수는 10+3+4+3+4점
        assert.strictEqual(game.score(), 10 + 3 + 4 + 3 + 4);
    });

    /**
     * 완벽한 게임 - 모든 투구가 스트라이크
     */
    it('완벽한 게임 - 모든 투구가 스트라이크', () => {
        // Given & When: 12번의 스트라이크 (10프레임 + 10프레임 보너스 2투구)
        for (let i = 0; i < 12; i++) {
            game.roll(10);
        }

        // Then: 300점
        assert.strictEqual(game.score(), 300);
    });
});
