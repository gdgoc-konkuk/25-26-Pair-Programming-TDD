/**
 * 볼링 게임 클래스
 */
export class Game {
    /**
     * 새로운 게임을 초기화합니다.
     */
    constructor() {
        this.rolls = [];
    }

    /**
     * 플레이어가 공을 굴려 쓰러뜨린 핀의 개수를 기록합니다.
     *
     * @param {number} pins - 쓰러뜨린 핀의 수 (0-10)
     */
    roll(pins) {
        this.rolls.push(pins);
    }

    score() {
        let total = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.rolls[rollIndex] === 10) {
                total += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
                rollIndex += 1;
            } else if (this._isSpare(rollIndex)) {
                total += 10 + this._spareBonus(rollIndex);
                rollIndex += 2;
            } else {
                total += this._frameScore(rollIndex);
                rollIndex += 2;
            }
        }

        return total;
    }

    /**
     * 스페어 판정을 별도 메서드로 추출
     */
    _isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }

    /**
     * 스페어 보너스 계산을 별도 메서드로 추출
     */
    _spareBonus(rollIndex) {
        return this.rolls[rollIndex + 2];
    }

    /**
     * 일반 프레임 점수 계산을 별도 메서드로 추출
     */
    _frameScore(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
}
