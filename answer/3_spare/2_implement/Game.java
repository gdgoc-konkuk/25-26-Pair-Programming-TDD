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

    /**
     * 현재까지의 총 점수를 계산하여 반환합니다.
     *
     * @return 총 점수
     */
    public int score() {
        int total = 0;
        int rollIndex = 0;

        // 10개 프레임을 하나씩 처리
        for (int frame = 0; frame < 10; frame++) {
            // 스페어인가? (두 투구 합이 10)
            if (rolls.get(rollIndex) + rolls.get(rollIndex + 1) == 10) {
                // 스페어: 10점 + 다음 투구
                total += 10 + rolls.get(rollIndex + 2);  // 보너스
                rollIndex += 2;
            } else {
                // 일반: 두 투구 합
                total += rolls.get(rollIndex) + rolls.get(rollIndex + 1);
                rollIndex += 2;
            }
        }

        return total;
    }
}
