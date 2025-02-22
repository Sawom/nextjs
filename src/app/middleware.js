import { NextResponse } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const dummyUserData = {
    role: 'user',
    email: 'test@gmail.com'
  }
  
  let isServicePage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData.role == 'admin';

  if(isServicePage && !isAdmin){
    return NextResponse.redirect(new URL('/login', request.url))
  }
    return NextResponse.next();
}
