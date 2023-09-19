import java.util.Scanner;

/**
 * packageName : PACKAGE_NAME
 * fileName : SolutionApplication
 * author : GGG
 * date : 2023-09-19
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class SolutionApplication {
    public static void main(String[] args) {
        /**
         * 문자열 출력하기
         * 입력 : HelloWorld!
         * 출력 : HelloWorld!
         */
//        Scanner sc = new Scanner(System.in);
//        String a = sc.next();
//        System.out.println(a);

        /**
         * 문자 리스트를 문자열로 변환하기
         * @param arr : ["a","b","c"]
         * @return "abc"
         */
        Solution solution = new Solution();
        String[] arg = {"a","b","c"};
        System.out.println(solution.solution(arg));
    }
}
