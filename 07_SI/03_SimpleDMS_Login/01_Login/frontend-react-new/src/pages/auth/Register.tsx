import React, { useState } from "react";
import "../../assets/css/login.css"
import { Form, ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../store/store";
import IUser from "../../types/auth/IUser";
import { register } from "../../store/slices/auth";


function Register() {

  // todo 변수정의
  // 회원생성 성공여부 변수
  const [successful, setSuccessful] = useState<boolean>(false);
  // 화면에 메세지 출력할 변수
  const [message, setMessage] = useState<string>("");

  // todo : 공유저장소 공유함수(register) 가져오기
  const dispatch = useAppDispatch();
  
  // 객체 초기화 : 속성(Formik) 체크
  const initialValues = {
      username: "",
      email: "",
      password: "",     // 암호
      repassword: "",   // 확인 암호
  }

  // todo 함수정의
  // 유효성 체크 함수 : validationSchema(Formik 함수)
  // 에러에 대한 정의를 하는 함수
  const validationSchema = Yup.object().shape({
    username: Yup.string()
    // 유효성 조건을 개발자가 직접 작성하는 함수
      .test(
        "len",
        "username은 3 ~ 20자만 가능합니다.",
        // 유효성 체크 조건
        (val) => {
          if (
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 20
          ) {
            return true;
          }
          return false;
        }
      )
      .required("이름은 필수입력사항 입니다."),   // 필수입력
    email: Yup.string()
      .email("이메일을 정확하게 입력해주세요.")  // 이메일이 틀리면 나타남
      .required("이메일은 필수입력사항 입니다."), // 이메일 필수입력
    password: Yup.string()
      .test(
        "len",
        "비밀번호는 6 ~ 40자 사이의 문자를 입력해야합니다.",
        (val) => {
          if (
            val &&
            val.toString().length >= 6 &&
            val.toString().length <= 40
          ) {
            return true;
          }
          return false;
        }
      )
      .required("비밀번호는 필수입력사항 입니다."), // 비밀번호 필수입력
    repassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "페스워드가 일치하지 않습니다."               // 패스워드가 일치하지 않으면 나타남
    ),
  });

  // 회원가입 함수 : Formik의 onSubmit(저장) 함수 바인딩
  // formValue : email, password, username, repassword 이 들어간 객체
  const handleRegister = (formValue: any) => { 
      const {email, password, username} = formValue

      // 임시객체
      const data: IUser = {
        email,
        password,
        username,
        codeName: "ROLE_USER"
      }
      // 성공여부 변수 초기화
      setSuccessful(false);

      // todo : 백엔드 저장 요청 = 공유함수(register)
      dispatch(register(data))
      .unwrap()   // 공유저장소 에러처리
      .then(()=>{
        setSuccessful(true);
        setMessage("유저가 생성되었습니다.");
      })
      .catch((e:Error)=>{
        console.log(e);
        setSuccessful(false);
      })
   }


  return (
    <div>
    <div className="card mt-5">
      <div className="card-body p-0">
        {/* <!-- Nested Row within Card Body --> */}
        <div className="row">
          <div className="col-lg-5 bg-register-image"></div>
          <div className="col-lg-7">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
              >
                {({ errors, touched }) => (
                  <Form className="user">
                    {!successful && (
                      <div>
                        <div className="form-group">
                          <Field
                            type="email"
                            name="email"
                            className={
                              "form-control form-control-user mb-3" +
                              (errors.email && touched.email
                                ? " is-invalid"
                                : "")
                            }
                            id="exampleInputEmail"
                            placeholder="Email Address"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <Field
                              type="password"
                              name="password"
                              className={
                                "form-control form-control-user mb-3" +
                                (errors.password && touched.password
                                  ? " is-invalid"
                                  : "")
                              }
                              id="exampleInputPassword"
                              placeholder="Password"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="col-sm-6">
                            <Field
                              type="password"
                              name="repassword"
                              className={
                                "form-control form-control-user mb-3" +
                                (errors.repassword && touched.repassword
                                  ? " is-invalid"
                                  : "")
                              }
                              id="exampleRepeatPassword"
                              placeholder="Repeat Password"
                            />
                            <ErrorMessage
                              name="repassword"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <Field
                            type="text"
                            name="username"
                            className={
                              "form-control form-control-user mb-3" +
                              (errors.username && touched.username
                                ? " is-invalid"
                                : "")
                            }
                            id="exampleName"
                            placeholder="Full Name"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-user w-100 mb-3"
                        >
                          Register Account
                        </button>
                      </div>
                    )}

                    {/* 성공하면 성공메세지 출력 시작 */}
                    {successful && (
                      <div className="alert alert-success text-center" role="alert">
                        {message}
                      </div>
                    )}
                    {/* 성공하면 성공메세지 출력 끝 */}
                  </Form>
                )}
              </Formik>

              <hr />
              <div className="text-center">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
              <div className="text-center">
                <a href="/login">Already have an account? Login!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register;
