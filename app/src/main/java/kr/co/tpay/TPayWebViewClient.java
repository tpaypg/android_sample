package kr.co.tpay;


import android.app.AlertDialog;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.net.http.SslError;
import android.util.Log;
import android.webkit.SslErrorHandler;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.net.URISyntaxException;


public class TPayWebViewClient extends WebViewClient {

    @Override
    public void onReceivedSslError(WebView view, final SslErrorHandler handler, SslError error) {
        // 다이아로그박스 출력
        new AlertDialog.Builder(view.getContext())
                .setTitle("안전하지 않은 사이트")
                .setMessage("안전하지 않은 사이트로 접속 하시겠습니까?")
                .setPositiveButton("예", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        handler.proceed();
                    }
                })
                .setNegativeButton("아니오", null).show();
    }

    @Override
//  public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
    public boolean shouldOverrideUrlLoading(WebView view, String url) {

//        Uri uri = request.getUrl();
//        String url = uri.toString();
        Uri uri = Uri.parse(url); // API level 23 이하에서는 인자로 받은 url 문자열을 uri로 변환.
        Context c = view.getContext();

//        Log.d("tpay", url);

        if (uri.getScheme().equals("http")
                || uri.getScheme().equals("https")
                || uri.getScheme().equals("javascript")) { // URL일 경우  webview 로딩

            view.loadUrl(url);
            return true;
        } else { // 외부 앱 호출

            Intent intent = null;
            try {
                intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME);
            } catch (URISyntaxException ex) {
//                Log.e("tpay", "Bad URI" + url, ex);
                return false;
            }

            try {
                c.startActivity(intent);
                return true;
            } catch (ActivityNotFoundException e) {

                if (uri.getScheme().equals("intent")) {
                    try {
                        Intent marketIntent = new Intent(Intent.ACTION_VIEW);
                        marketIntent.setData(Uri.parse("market://details?id=" + intent.getPackage()));
                        c.startActivity(marketIntent);
                        return true;
                    } catch (Exception ex) {
//                        Log.e("tpay", "Failed call market", ex);
                    }

                } else if (uri.getScheme().equals("ispmobile")) {
                    try {
                        view.loadUrl("http://mobile.vpay.co.kr/jsp/MISP/andown.jsp");
                        return true;
                    } catch (Exception ex) {
//                        Log.e("tpay", "Failed call market", ex);
                    }
                } else {
                    try {
                        String strParams = intent.getDataString();

                        Intent tempIntent = new Intent(Intent.ACTION_VIEW);
                        tempIntent.setData(Uri.parse(strParams));

                        c.startActivity(tempIntent);
                        return true;
                    } catch (Exception ex) {
                        try {
                            Intent marketIntent = new Intent(Intent.ACTION_VIEW);
                            marketIntent.setData(Uri.parse("market://details?id=" + intent.getPackage()));
                            c.startActivity(marketIntent);
                            return true;
                        } catch (ActivityNotFoundException ex1) {
//                            Log.e("tpay", "Failed call market", ex1);
                        }
                    }
                }
            }
        }

        return false;
    }
}

