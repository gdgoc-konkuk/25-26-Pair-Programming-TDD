package bowling;

/**
 * 볼링 게임 클래스
 */
public class Game {
    private int totalScore;

    /**
     * 새로운 게임을 초기화합니다.
     */
    public Game() {
        this.totalScore = 0;
    }

    /**
     * 플레이어가 공을 굴려 쓰러뜨린 핀의 개수를 기록합니다.
     *
     * @param pins 쓰러뜨린 핀의 수 (0-10)
     */
    public void roll(int pins) {
        this.totalScore += pins;
    }

    /**
     * 현재까지의 총 점수를 계산하여 반환합니다.
     *
     * @return 총 점수
     */
    public int score() {
        return this.totalScore;
    }
}
