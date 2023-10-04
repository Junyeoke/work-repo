import java.util.*;

/**
 * packageName : PACKAGE_NAME
 * fileName : Solution
 * author : GGG
 * date : 2023-09-19
 * description : 솔루션 함수 작성하는 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */

// TODO: 10페이지 8번 ~ 12페이지 4번(끝)
public class Solution {

    /**
     * 가위바위보
     *
     * @param rsp
     * @return TODO : String.split("문자열 자를 기준")
     * String.split("구분자", 자를수);
     */
    public String solution8(String rsp) {
        String answer = "";
        // 반복문 수행
        for (int i = 0; i < rsp.length(); i++) {
            // rsp를 "" 기준으로 나누고 그 숫자가 2 = 가위 이면
            if (rsp.split("")[i].equals("2")) {
                // answer에 0 = 바위 입력
                answer += "0";
            } else if (rsp.split("")[i].equals("0")) {
                answer += "5";
            } else {
                answer += "2";
            }
        }
        return answer;
    }

    /**
     * 모스부호(1)
     *
     * @param letter
     * @return
     */
    public String solution9(String letter) {
        String[] morse = {".-", "-...", "-.-.", "-..", ".", "..-.",
                "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.",
                "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-",
                ".--", "-..-", "-.--", "--.."};
        String[] morseString;
        morseString = letter.split(" ");

        StringBuilder sb = new StringBuilder();
        for (String word : morseString) {
            for (int i = 0; i < morse.length; i++) {
                if (word.equals(morse[i])) sb.append(Character.toString(i + 'a'));
            }
        }
        return sb.toString();
    }


    /**
     * 개미 군단
     *
     * @param hp
     * @return
     */
    public int solution10(int hp) {
        int answer = hp / 5;            //필요한 장군개미의 수를 먼저 구함
        hp %= 5;                    //장군개미를 전부 상대하고 남은 hp

        answer += hp / 3;               //남은 hp에 필요한 병정개미의 수를 구함
        hp %= 3;                    //병정개미를 전부 상대하고 남은 hp

        answer += hp / 1;               //남은 hp에 필요한 일개미의 수를 구함

        return answer;
    }

    /**
     * 순서쌍의 개수
     *
     * @param n
     * @return
     */
    public int solution11(int n) {
        int answer = 0;
        int count = 0;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }
        answer = count;
        return answer;
    }

    /**
     * 진료 순서 정하기
     *
     * @param emergency
     * @return
     */
    public int[] solution12(int[] emergency) {
// asc라는 배열을 새로 선언해서 새로운 메모리 공간을 확보하고
        int[] asc = new int[emergency.length];
        int[] answer = new int[emergency.length];

        // for돌려서 값 하나하나 넣어준다.
        for (int i = 0; i <= emergency.length - 1; i++) {
            asc[i] = emergency[i];
        }

        Arrays.sort(asc);

        for (int i = 0; i <= emergency.length - 1; i++) {
            for (int j = 0; j <= emergency.length - 1; j++) {
                if (asc[i] == emergency[j]) {
                    answer[j] = emergency.length - i;
                }
            }
        }
        return answer;
    }

    /**
     * 외계행성의 나이
     *
     * @param age
     * @return
     */
    public String solution13(int age) {
        String answer = "";
        String age962 = "abcdefghij";
        String[] ageArr = String.valueOf(age).split("");

        for (int i = 0; i < ageArr.length; i++) {
            answer += age962.charAt(Integer.valueOf(ageArr[i]));
        }
        return answer;
    }

    /**
     * 배열 자르기
     *
     * @param numbers
     * @param num1
     * @param num2
     * @return
     */
    public List<Integer> solution14(int[] numbers, int num1, int num2) {
        List<Integer> answer = new ArrayList<>();
        for (int i = num1; i <= num2; i++) {
            answer.add(numbers[i]);
        }
        return answer;
    }

    /**
     * 짝수의 합
     *
     * @param n
     * @return
     */
    public int solution15(int n) {
        int answer = 0;
        for (int i = 1; i <= n; i++) {
            if ((i % 2 == 0)) {
                answer += i;
            }
        }
        return answer;
    }

    /**
     * 양꼬치
     *
     * @param n
     * @param k
     * @return
     */
    public int solution16(int n, int k) {
        int answer = 0;
        answer = (n * 12000) + (k * 2000) - (n / 10 * 2000);
        return answer;
    }

    /**
     * 각도기
     *
     * @param angle
     * @return
     */
    public int solution17(int angle) {
        int answer = 0;
        if (angle > 0 && angle < 90) {
            answer = 1;
        } else if (angle == 90) {
            answer = 2;
        } else if (angle > 90 && angle < 180) {
            answer = 3;
        } else if (angle == 180) {
            answer = 4;
        }
        return answer;
    }

    /**
     * 특정문자 제거하기
     *
     * @param my_string
     * @param letter
     * @return
     */
    public String solution18(String my_string, String letter) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < my_string.length(); i++) {
            if (my_string.charAt(i) != letter.charAt(0)) {
                sb.append(my_string.charAt(i));
            }
        }
        return sb.toString();
    }

    /**
     * 문자 반복 출력하기
     *
     * @param my_string
     * @param n
     * @return
     */
    public String solution19(String my_string, int n) {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < my_string.length(); i++) {
            char ch = my_string.charAt(i);
            for (int j = 0; j < n; j++) {
                sb.append(ch);
            }
        }

        return sb.toString();
    }

    /**
     * 짝수 홀수 개수
     *
     * @param num_list
     * @return
     */
    public int[] solution20(int[] num_list) {
        int[] answer = new int[2];
        int count1 = 0;
        int count2 = 0;
        for (int i = 0; i < num_list.length; i++) {
            if (num_list[i] % 2 == 0) {
                count1++;
                answer[0] = count1;
            } else {
                count2++;
                answer[1] = count2;
            }
        }
        return answer;
    }

    /**
     * 직각삼각형 출력하기
     *
     * @param args
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i = 1; i <= n; i++){
            for(int j = 0; j < i; j++){
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    /**
     * 문자열 뒤집기
     *
     * @param my_string
     * @return
     */
    public String solution22(String my_string) {
        String answer = "";
        for (int i = my_string.length() - 1; i >= 0; i++) {

        }
        return answer;
    }

    /**
     * 배열 뒤집기
     *
     * @param num_list
     * @return
     */
    public int[] solution23(int[] num_list) {
        // answer 배열에 num_list 길이만큼 배열 생성
        int[] answer = new int[num_list.length];
        // 반복문
        // i는 num_list 길이 - 1, j = 0, i >= 0
        for (int i = num_list.length - 1, j = 0; i >= 0; i--, j++) {
            answer[j] = num_list[i];
        }
        return answer;
    }

    /**
     * 나이 출력
     *
     * @param age
     * @return
     */
    public int solution24(int age) {
        int answer = 0;
        answer = (2022 - age) + 1;
        return answer;
    }

    /**
     * 아이스 아메리카노
     *
     * @param money
     * @return
     */
    public int[] solution25(int money) {
        int[] answer = new int[2];
        answer[0] = money / 5500;
        answer[1] = money % 5500;
        return answer;
    }

    /**
     * 옷가게 할인 받기
     *
     * @param price
     * @return
     */
    public int solution26(int price) {
        if(price >= 500000) {
            price *= 0.8;
        } else if(price >= 300000) {
            price *= 0.9;
        } else if(price >= 100000) {
            price *= 0.95;
        }
        return price;
    }

    /**
     * 배열의 평균값
     *
     * @param numbers
     * @return
     */
    public double solution27(int[] numbers) {
        double answer = 0;
        double sum = 0;
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        answer = sum / numbers.length;
        return answer;
    }

    /**
     * 피자 나눠 먹기(3)
     *
     * @param slice
     * @param n
     * @return
     */
    public int solution28(int slice, int n) {
        int answer = 0;
        if(n % slice == 0)
            answer = n / slice;
        else
            answer = n / slice + 1;
        return answer;
    }

    /**
     * 피자 나눠 먹기(2)
     *
     * @param n
     * @return
     */
    public int solution29(int n) {
        int answer = 0;
        for (int i = 1; i <= 6 * n; i++) {
            if (6 * i % n == 0) {
                answer = i;
                break;
            }
        }
        return answer;
    }

    /**
     * 피자 나눠 먹기(1)
     *
     * @param n
     * @return
     */
    public int solution30(int n) {
        int answer = 0;
        if (n % 7 == 0) {
            answer = n / 7;
        } else {
            answer = n / 7 + 1;
        }
        return answer;
    }

    /**
     * 짝수는 싫어요
     *
     * @param n
     * @return
     */
    public List<Integer> solution31(int n) {
        List<Integer> answer = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                answer.add(i);
            }
        }
        return answer;
    }

    /**
     * 최빈값 구하기
     *
     * @param array
     * @return
     */
    public int solution32(int[] array) {
        int answer = 0;
        Arrays.sort(array); // 배열 오름차순 정렬
        int max = array[array.length - 1];  // max변수에 array배열의 최대값 넣기
        int[] count = new int[max + 1]; // count 배열 선언, 배열크기는 array 배열 최대값 크기 + 1

        // 반복문을 돌면서 count 배열에 해당하는 인덱스에 1씩 ++
        for (int i = 0; i < array.length; i++) {
            count[array[i]]++;
//            System.out.println("count 배열 : " + Arrays.toString(count));
        }
        // top 변수에 count[0] == 0 값 대입
        int top = count[0];

        for (int i = 1; i < count.length; i++) {
            // top의 값이 count 배열 값보다 작으면?
            if (top < count[i]) {
                // top에 count배열 요소 대입
                top = count[i];
//                System.out.println("top의 값 : " + top);
                answer = i;
//                System.out.println("answer의 값 : " + answer);
            } else if (top == count[i]) {
                answer = -1;
            }
        }
        return answer;
    }

    public int solution321(int[] array) {
        int maxCount = 0;
        int answer = 0;
        Map<Integer, Integer> map = new HashMap<>();
        for (int number : array) {
            int count = map.getOrDefault(number, 0) + 1;
            System.out.println("number : " + number);
            System.out.println("count : " + count);
            if (count > maxCount) {
                maxCount = count;
                answer = number;
            } else if (count == maxCount) {
                answer = -1;
            }
            map.put(number, count);
        }
        return answer;
    }

    /**
     * 중앙값 구하기
     *
     * @param array
     * @return
     */
    public int solution33(int[] array) {
        int answer = 0;
        Arrays.sort(array);
        return array[array.length / 2];
    }

    /**
     * 나머지 구하기
     *
     * @param num1
     * @param num2
     * @return
     */
    public int solution34(int num1, int num2) {
        int answer = -1;
        answer = num1 % num2;
        return answer;
    }

    /**
     * 배열 두배 만들기
     *
     * @param numbers
     * @return
     */
    public int[] solution35(int[] numbers) {
        int[] answer = new int[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            answer[i] = numbers[i] * 2;
        }
        return answer;
    }

    /**
     * 분수의 덧셈
     *
     * @param numer1
     * @param denom1
     * @param numer2
     * @param denom2
     * @return
     */
    public int[] solution36(int numer1, int denom1, int numer2, int denom2) {
        int numerlator = (numer1 * denom2) + (numer2 * denom1);
        int denominator = denom1 * denom2;

        for (int i = numerlator - 1; i > 1; i--) {
            if (numerlator % i == 0 && denominator % i == 0) {
                numerlator /= i;
                denominator /= i;
            }
        }
        int[] answer = {numerlator, denominator};
        return answer;
    }

    /**
     * 숫자 비교하기
     *
     * @param num1
     * @param num2
     * @return
     */
    public int solution37(int num1, int num2) {
        int answer = 0;
        if (num1 == num2) {
            answer = 1;
        } else {
            answer = -1;
        }
        return answer;
    }

    /**
     * 두 수의 나눗셈
     *
     * @param num1
     * @param num2
     * @return
     */
    public int solution38(int num1, int num2) {
        double answer = (double) num1 / num2 * 1000;
        return (int) answer;
    }

    /**
     * 몫 구하기
     *
     * @param num1
     * @param num2
     * @return
     */
    public int solution39(int num1, int num2) {
        int answer = 0;
        answer = num1 / num2;
        return answer;
    }

    /**
     * 두 수의 곱
     *
     * @param num1
     * @param num2
     * @return
     */
    public int solution40(int num1, int num2) {
        int answer = 0;
        answer = num1 * num2;
        return answer;
    }

    /**
     * 두 수의 차
     *
     * @param num1
     * @param num2
     * @return
     */
    public int solution41(int num1, int num2) {
        int answer = 0;
        answer = num1 - num2;
        return answer;
    }

    /**
     * 두 수의 합
     *
     * @param num1
     * @param num2
     * @return
     */
    public int solution42(int num1, int num2) {
        int answer = -1;
        answer = num1 + num2;
        return answer;
    }

    /**
     * 머쓱이보다 키 큰 사람
     *
     * @param array
     * @param height
     * @return
     */
    public int solution43(int[] array, int height) {
        int answer = 0;
        for (int i = 0; i < array.length; i++) {
            if (array[i] > height) {
                answer += 1;
            }
        }
        return answer;
    }

    /**
     * 중복된 숫자 개수
     *
     * @param array
     * @param n
     * @return
     */
    public int solution44(int[] array, int n) {
        int answer = 0;
        for (int i = 0; i < array.length; i++) {
            if (array[i] == n) {
                answer += 1;
            }
        }
        return answer;
    }

}