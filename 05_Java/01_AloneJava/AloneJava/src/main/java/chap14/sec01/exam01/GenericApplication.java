package chap14.sec01.exam01;

import java.util.ArrayList;
import java.util.Arrays;

public class GenericApplication {
    public static void main(String[] args) {
//        TODO: 여기부터 코딩
//    TODO : 제네릭 : 향상된 배열에서 자료를 추가할 때 자료형을 제한하는 것을 의미
//        사용법 : List<제한할자료형> list = new ArrayList<>();
//        부모클래스 : product, 자식 : Tv, Audio 클래스
        ArrayList<Product> productArrayList = new ArrayList<>();
        ArrayList<Tv> tvArrayList = new ArrayList<>();
//        TODO : 1) 아래 에러 사항
//        ArrayList<Product> tvArrayList = new ArrayList<Tv>(); // 이렇게 사용하면 안됨!

//        TODO : 2) productArrayList : 부모 클래스 배열에 자식 넣기 가능할까?
        productArrayList.add(new Tv());     // ok 가능
        productArrayList.add(new Audio());     // ok 가능

//        TODO : 3) tvArrayList : 당연히 Tv 객체만 배열에 추가 가능함
        tvArrayList.add(new Tv());

        System.out.println("---- 함수의 매개변수에 제네릭 사용 ----");
        printAll(productArrayList); // 매개변수의 제네릭으로 Product로 제한되어있기 때문
//        TODO : 에러발생 : 부모라도 자식 클래스는 사용안됨 : 대상 클래스(Product)만 가능
//        printAll(tvArrayList);  // 오류 발생 : Product의 자식들 사용불가

        System.out.println("---- 제네릭의 특수한 형태 ----");
        System.out.println("---- <? extend Tv> ----");
//        TODO : <? extend Tv> : Tv의 자식 클래스만 가능함(부모는 불가)
        printAll2(tvArrayList); // 가능
//        printAll2(productArrayList);    // 불가

        System.out.println("---- <? super Product> ----");
//        TODO : <? super Product> : Product의 부모 클래스만 가능함(자식클래스는 불가)
        printAll3(productArrayList);    // 가능
//        printAll3(tvArrayList); // 불가, 자식클래스는 사용불가

        System.out.println("---- <?> ----");
//        TODO : <?> : 모든 자료형이 가능
        printAll4(productArrayList); // ok
        printAll4(tvArrayList); // ok

    }


    public static void printAll(ArrayList<Product> list) {      // 함수의 매개변수로 제네릭 사용
        for(Object p : list) {
            System.out.println(p);
        }
    }

    public static void printAll2(ArrayList<? extends Tv> list) {
        for(Object p : list) {
            System.out.println(p);
        }
    }

    public static void printAll3(ArrayList<? super Product> list) {
        for(Object p : list) {
            System.out.println(p);
        }
    }

    public static void printAll4(ArrayList<?> list) {
        for(Object p : list) {
            System.out.println(p);
        }
    }
}











