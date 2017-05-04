package org.gwtproject.dosomething.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import org.gwtproject.dosomething.client.SomeService;

/**
 * Created by Joe on 5/3/2017.
 */
public class DoSomethingServiceImpl extends RemoteServiceServlet implements
        SomeService {
    public String doSomething(String input) {
        return "Do something";
    }
}
