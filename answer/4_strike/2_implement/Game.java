package bowling;

import java.util.ArrayList;
import java.util.List;

/**
 * 볼링 게임 클래스
 */
public class Game {
    private List<Integer> rolls;

    /**
     * 새로운 게임을 초기화합니다.
     */
    public Game() {
        this.rolls = new ArrayList<>();
    }

    /**
     * 플레이어가 공을 굴려 쓰러뜨린 핀의 개수를 기록합니다.
     *
     * @param pins 쓰러뜨린 핀의 수 (0-10)
     */
    public void roll(int pins) {
        this.rolls.add(pins);
    }

    public int score() {
        int total = 0;
        int rollIndex = 0;

        for (int frame = 0; frame < 10; frame++) {
            if (rolls.get(rollIndex) == 10) {
                total += 10 + rolls.get(rollIndex + 1) + rolls.get(rollIndex + 2);
                rollIndex += 1;
            } else if (isSpare(rollIndex)) {
                total += 10 + spareBonus(rollIndex);
                rollIndex += 2;
            } else {
                total += frameScore(rollIndex);
                rollIndex += 2;
            }
        }

        return total;
    }

    /**
     * 스페어 판정을 별도 메서드로 추출
     */
    private boolean isSpare(int rollIndex) {
        return rolls.get(rollIndex) + rolls.get(rollIndex + 1) == 10;
    }

    /**
     * 스페어 보너스 계산을 별도 메서드로 추출
     */
    private int spareBonus(int rollIndex) {
        return rolls.get(rollIndex + 2);
    }

    /**
     * 일반 프레임 점수 계산을 별도 메서드로 추출
     */
    private int frameScore(int rollIndex) {
        return rolls.get(rollIndex) + rolls.get(rollIndex + 1);
    }
}
