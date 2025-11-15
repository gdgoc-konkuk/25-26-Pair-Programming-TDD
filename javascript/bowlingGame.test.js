import { describe, test, beforeEach } from 'node:test';
import assert from 'node:assert';
import { Game } from './bowlingGame.js';

describe('Bowling Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('샘플 테스트 - 항상 통과합니다', () => {
    // Given: 새로운 게임이 시작되었을 때 (Game 인스턴스 생성됨)

    // When: 아무 동작도 하지 않고

    // Then: 초기 점수는 0이어야 합니다
    assert.strictEqual(game.score(), 0);
  });
});
