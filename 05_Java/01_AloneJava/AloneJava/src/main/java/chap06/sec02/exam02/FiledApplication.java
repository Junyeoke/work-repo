package chap06.sec02.exam02;

/**
 * packageName : chap06.sec02.exam02
 * fileName : FiledApplication
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class FiledApplication {
    public static void main(String[] args) {
//        TODO: 클래스명 명명법 :  첫글자 대문자 나머지 소문자, 단어사이는 대문자(파스칼표기법)
        FieldInit fieldInit = new FieldInit();

//        정수
        System.out.println("byte : " + fieldInit.bField);
        System.out.println("short : " + fieldInit.sField);
        System.out.println("int : " + fieldInit.iField);
        System.out.println("long : " + fieldInit.lField);
//        실수
        System.out.println("float : " + fieldInit.fField);
        System.out.println("double : " + fieldInit.dField);
//        char / boolean
        System.out.println("char : " + fieldInit.cField);
        System.out.println("boolean : " + fieldInit.boField);
//        String / int[]
        System.out.println("String : " + fieldInit.strField);
        System.out.println("int[] : " + fieldInit.arrField);


    }
}
