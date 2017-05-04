package org.gwtproject.dosomething.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * Created by Joe on 5/3/2017.
 */
@RemoteServiceRelativePath("dosomething")
public interface SomeService  extends RemoteService {
    String doSomething(String name) throws IllegalArgumentException;
}
