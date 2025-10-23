import { FooterLayout } from "../layout/footerLayout"
import { HeaderLayout } from "../layout/headerLayout"
import { MainLayout } from "../layout/mainLayout"

export function PrincipalLayout() {

  return (
    <>
      <HeaderLayout />
      <MainLayout />
      <FooterLayout/>
    </>
  )
}
