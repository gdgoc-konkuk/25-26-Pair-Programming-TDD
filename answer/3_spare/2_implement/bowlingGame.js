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

    /**
     * 현재까지의 총 점수를 계산하여 반환합니다.
     *
     * @returns {number} 총 점수
     */
    score() {
        let total = 0;
        let rollIndex = 0;

        // 10개 프레임을 하나씩 처리
        for (let frame = 0; frame < 10; frame++) {
            // 스페어인가? (두 투구 합이 10)
            if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
                // 스페어: 10점 + 다음 투구
                total += 10 + this.rolls[rollIndex + 2];  // 보너스
                rollIndex += 2;
            } else {
                // 일반: 두 투구 합
                total += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
                rollIndex += 2;
            }
        }

        return total;
    }
}
