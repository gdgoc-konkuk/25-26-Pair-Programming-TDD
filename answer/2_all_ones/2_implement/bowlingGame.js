/**
 * 볼링 게임 클래스
 */
export class Game {
    /**
     * 새로운 게임을 초기화합니다.
     */
    constructor() {
        this.totalScore = 0;
    }

    /**
     * 플레이어가 공을 굴려 쓰러뜨린 핀의 개수를 기록합니다.
     *
     * @param {number} pins - 쓰러뜨린 핀의 수 (0-10)
     */
    roll(pins) {
        this.totalScore += pins;
    }

    /**
     * 현재까지의 총 점수를 계산하여 반환합니다.
     *
     * @returns {number} 총 점수
     */
    score() {
        return this.totalScore;
    }
}
