package org.gwtproject.gwt2.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import org.gwtproject.gwt2.client.Gwt2Service;

/**
 * Created by Joe on 5/3/2017.
 */
public class Gwt2ServiceImpl extends RemoteServiceServlet implements
        Gwt2Service {
    public String doSomething(String input) {
        return "Do something";
    }
}
